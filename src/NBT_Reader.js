const {Buffer} = require("node:buffer");

const NBT_Types = {
    0:"EndOfCompoud",
    1:"Byte",
    2:"Int16",
    3:"Int32",
    4:"Int64",
    5:"Float",
    6:"Double",
    7:"ByteArray",
    8:"String",
    9:"TypedList",
    10:"Compoud",
    "EndOfCompoud":0,
    "Byte":1,
    "Int16":2,
    "Int32":3,
    "Int64":4,
    "Float":5,
    "Double":6,
    "ByteArray":7,
    "String":8,
    "TypedList":9,
    "Compoud":10
};
const NBT_Number_Types = {
    [NBT_Types.Byte]:"b",
    [NBT_Types.Int16]:"s",
    [NBT_Types.Int32]:"i",
    [NBT_Types.Int64]:"l",
    [NBT_Types.Float]:"f",
    [NBT_Types.Double]:"d"
}
const Raw_NBT_Readers = {
    /**@param {Stream} myStream */
    [NBT_Types.Compoud](myStream){
        const compoud = {};
        while(true){
            const readType = Raw_NBT_Readers.readType(myStream);
            if(readType === NBT_Types.EndOfCompoud) return compoud;
            const keyName = Raw_NBT_Readers[NBT_Types.String](myStream);
            const value = Raw_NBT_Readers[readType](myStream);
            compoud[keyName] = value;
        }
    },
    /**@param {Stream} myStream */
    [NBT_Types.TypedList](myStream){
        const readType = Raw_NBT_Readers.readType(myStream);
        const readLength = myStream.readInt32LE(myStream);
        const array = [];
        for (let i = 0; i < readLength; i++) array.push(Raw_NBT_Readers[readType](myStream));
        return array;
    },
    /**@param {Stream} myStream */
    [NBT_Types.ByteArray](myStream){
        const buffer = new Uint8Array(myStream.readInt32LE());
        myStream.buffer.copy(buffer,0,myStream.offset,myStream.offset + buffer.length);
        myStream.offset += buffer.length;
        return buffer;
    },
    /**@param {Stream} myStream */
    [NBT_Types.String](myStream){
        const buffer = Buffer.alloc(myStream.readInt16LE());
        myStream.buffer.copy(buffer,0,myStream.offset,myStream.offset + buffer.byteLength);
        myStream.offset += buffer.byteLength;
        return buffer.toString("utf8");
    },
    /**@param {Stream} myStream */
    readType(myStream){
        return myStream.readByte();
    },
    /**@param {Stream} myStream */
    [NBT_Types.Byte](myStream){return myStream.readByte();},
    /**@param {Stream} myStream */
    [NBT_Types.Int16](myStream){return myStream.readInt16LE();},
    /**@param {Stream} myStream */
    [NBT_Types.Int32](myStream){return myStream.readInt32LE();},
    /**@param {Stream} myStream */
    [NBT_Types.Int64](myStream){return myStream.readInt64LE();},
    /**@param {Stream} myStream */
    [NBT_Types.Float](myStream){return myStream.readFloatLE();},
    /**@param {Stream} myStream */
    [NBT_Types.Double](myStream){return myStream.readDoubleLE();}
}
const NBT_Readers = {
    /**@param {Stream} myStream */
    [NBT_Types.Compoud](myStream,type){
        const compoud = new CompoudValue({});
        while(true){
            const readType = NBT_Readers.readType(myStream);
            if(readType === NBT_Types.EndOfCompoud) return compoud;
            const keyName = NBT_Readers[NBT_Types.String](myStream,NBT_Types.String);
            const value = NBT_Readers[readType](myStream,readType);
            compoud.set("" + keyName, value);
        }
    },
    /**@param {Stream} myStream */
    [NBT_Types.TypedList](myStream,type){
        const readType = NBT_Readers.readType(myStream);
        const readLength = myStream.readInt32LE(myStream);
        const array = [];
        for (let i = 0; i < readLength; i++) array.push(NBT_Readers[readType](myStream,readType));
        return new TypedArrayValue(array,readType);
    },
    /**@param {Stream} myStream */
    [NBT_Types.ByteArray](myStream,type){
        const buffer = new Uint8Array(myStream.readInt32LE());
        myStream.buffer.copy(buffer,0,myStream.offset,myStream.offset + buffer.length);
        myStream.offset += buffer.length;
        return new Uint8ArrayValue(buffer);
    },
    /**@param {Stream} myStream */
    [NBT_Types.String](myStream,type){
        const buffer = Buffer.alloc(myStream.readInt16LE());
        myStream.buffer.copy(buffer,0,myStream.offset,myStream.offset + buffer.byteLength);
        myStream.offset += buffer.byteLength;
        return new StringValue(buffer.toString("utf8"));
    },
    /**@param {Stream} myStream */
    readType(myStream){
        return myStream.readByte();
    },
    /**@param {Stream} myStream */
    [NBT_Types.Byte](myStream,type){return new NumericValue(type,myStream.readByte());},
    /**@param {Stream} myStream */
    [NBT_Types.Int16](myStream,type){return  new NumericValue(type,myStream.readInt16LE());},
    /**@param {Stream} myStream */
    [NBT_Types.Int32](myStream,type){return  new NumericValue(type,myStream.readInt32LE());},
    /**@param {Stream} myStream */
    [NBT_Types.Int64](myStream,type){return  new NumericValue(type,myStream.readInt64LE());},
    /**@param {Stream} myStream */
    [NBT_Types.Float](myStream,type){return  new NumericValue(type,myStream.readFloatLE());},
    /**@param {Stream} myStream */
    [NBT_Types.Double](myStream,type){return  new NumericValue(type,myStream.readDoubleLE());}
}
const NBT_Writers = {
    /**@param {Stream} myStream */
    [NBT_Types.Compoud](myStream,value){
        for (const [key,v] of value) {
            const type = v.type;
            myStream.writeByte(type);
            const length = myStream.buffer.write(key,myStream.offset + 2,"utf8");
            myStream.writeInt16LE(length);
            myStream.offset += length;
            NBT_Writers[type](myStream,v);
        }
        myStream.writeByte(NBT_Types.EndOfCompoud);
    },
    /**@param {Stream} myStream  @param {TypedArrayValue} value*/
    [NBT_Types.TypedList](myStream,value){
        const {length,arrayType} = value;
        myStream.writeByte(arrayType);
        myStream.writeInt32LE(length);
        for(const v of value) NBT_Writers[arrayType](myStream,v);
    },
    /**@param {Stream} myStream  @param {Uint8ArrayValue} value*/
    [NBT_Types.ByteArray](myStream,value){
        const buffer = Buffer.from(value.value.buffer);
        myStream.writeInt32LE(value.byteLength);
        buffer.copy(myStream.buffer,myStream.offset);
    },
    /**@param {Stream} myStream  @param {StringValue} value*/
    [NBT_Types.String](myStream,value){
        const length = myStream.buffer.write(value.value,myStream.offset + 2,"utf8");
        myStream.writeInt16LE(length);
        myStream.offset += length;
    },
    /**@param {Stream} myStream  @param {NumericValue} value*/
    [NBT_Types.Byte](myStream,value){ myStream.writeByte(value.value)},
    /**@param {Stream} myStream  @param {NumericValue} value*/
    [NBT_Types.Int16](myStream,value){myStream.writeInt16LE(value.value)},
    /**@param {Stream} myStream  @param {NumericValue} value*/
    [NBT_Types.Int32](myStream,value){myStream.writeInt32LE(value.value)},
    /**@param {Stream} myStream  @param {NumericValue} value*/
    [NBT_Types.Int64](myStream,value){myStream.writeInt64LE(value.value)},
    /**@param {Stream} myStream  @param {NumericValue} value*/
    [NBT_Types.Float](myStream,value){myStream.writeFloatLE(value.value)},
    /**@param {Stream} myStream  @param {NumericValue} value*/
    [NBT_Types.Double](myStream,value){myStream.writeDoubleLE(value.value)}
}
const NBT_Number_Size = {
    [NBT_Types.Byte]:1,
    [NBT_Types.Int16]:2,
    [NBT_Types.Int32]:4,
    [NBT_Types.Int64]:8,
    [NBT_Types.Float]:4,
    [NBT_Types.Double]:8,
};
class Stream{
    /**@type {number} */
    offset;
    /**@type {Buffer} */
    buffer;
    constructor(buffer,offset){
        if(!buffer instanceof Buffer) {
            if(buffer instanceof ArrayBuffer) buffer = Buffer.from(buffer);
            else throw new TypeError("isNotBuffer or ArrayBuffer");
        }
        this.buffer = buffer;
        this.offset = offset??0;
    }
    readByte(){return this.buffer.readUInt8(this.offset++);}
    readInt16LE(){
        const value = this.buffer.readInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readInt32LE(){
        const value = this.buffer.readInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readInt64LE(){
        const value = this.buffer.readBigInt64LE(this.offset);
        this.offset += 8;
        return value;
    }
    readUInt16LE(){
        const value = this.buffer.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readUInt32LE(){
        const value = this.buffer.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readUInt64LE(){
        const value = this.buffer.readBigUInt64LE(this.offset);
        this.offset += 8;
        return value;
    }
    readFloatLE(){
        const value = this.buffer.readFloatLE(this.offset);
        this.offset += 4;
        return value;
    }
    readDoubleLE(){
        const value = this.buffer.readDoubleLE(this.offset);
        this.offset += 8;
        return value;
    }
    readByte(){return this.buffer.readUInt8(this.offset++);}
    readInt16LE(){
        const value = this.buffer.readInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    writeByte(value){ this.buffer.writeUInt8(value,this.offset++);}
    writeInt16LE(value){
        const length = this.buffer.writeInt16LE(value,this.offset);
        this.offset += 2;
        return length;
    }
    writeInt32LE(value){
        const length = this.buffer.writeInt32LE(value,this.offset);
        this.offset += 4;
        return length;
    }
    writeInt64LE(value){
        const length = this.buffer.writeBigInt64LE(value,this.offset);
        this.offset += 8;
        return length;
    }
    writeUInt16LE(value){
        const length = this.buffer.writeUInt16LE(value,this.offset);
        this.offset += 2;
        return length;
    }
    writeUInt32LE(value){
        const length = this.buffer.writeUInt32LE(value,this.offset);
        this.offset += 4;
        return length;
    }
    writeUInt64LE(value){
        const length = this.buffer.writeBigUInt64LE(value,this.offset);
        this.offset += 8;
        return length;
    }
    writeFloatLE(value){
        const length = this.buffer.writeFloatLE(value,this.offset);
        this.offset += 4;
        return length;
    }
    writeDoubleLE(value){
        const length = this.buffer.writeDoubleLE(value,this.offset);
        this.offset += 8;
        return length;
    }
}
class NBTValue {
    constructor(type, value){
        this.value = value;
        this.type = type;
    }
    clone(){return new this.constructor(this.value);}
    get byteLength(){return 0;}
    toSNBT(){return "";}
    toString(){return this.toSNBT()}
}
class CompoudValue extends NBTValue{
    constructor(value){
        super(NBT_Types.Compoud,value??{});
    }
    get(key){return this.value[key];}
    set(key,value){return this.value[key] = value;}
    has(key){return key in this.value;}
    *keys(){yield * Object.getOwnPropertyNames(this.value);}
    *values(){ for(const k of Object.getOwnPropertyNames(this.value)) yield this.value[k]; }
    *entries(){ for(const k of Object.getOwnPropertyNames(this.value)) yield [k,this.value[k]]; }
    [Symbol.iterator] = this.entries;
    forEach(callback){for(const [key,value] of this.entries()) callback(key,value,this);}
    clone(){return new this.constructor({...this.value});}
    get byteLength(){
        let a = 0;
        for (const [k,v] of this) {
            a += 1 + 2 + Buffer.from(k,"utf8").byteLength + v.byteLength;
        }
        return a + 1;
    }
    get size(){return Object.getOwnPropertyNames(this.value).length;}
    toSNBT(space,count = 1){
        if(this.size === 0) return "{}";
        if(space) {
            let a = "{";
            let add = false;
            for (const [key,value] of this) {
                if(add) a+=",";
                a+="\n" + space.repeat(count) + key + ": " + value.toSNBT(space,count+1);
                add = true;
            }
            return a + "\n" + space.repeat(count - 1) + "}";
        }
        else return "{" + [...this].map(([k,v])=>k + ": " + v.toSNBT()).join(",") + "}";
    }
}
class TypedArrayValue extends NBTValue{
    constructor(v,type){
        super(NBT_Types.TypedList,v);
        this.arrayType = type??v[0]?.type;
    }
    add(v){
        if(v instanceof NBTValue) return this.value.push(v);
        else return this.value.push(new NBT_Constructors[typeof v](v));
    }
    remove(index){
        ArrayRemove(this.value,index);
    }
    set(index,value){
        if(v instanceof NBTValue) return this.value[index] = value;
        else return this.value[index] = new NBT_Constructors[typeof value](value);
    }
    get length(){
        return this.value.length;
    }
    clear(){this.value = [];}
    clone(){return new this.constructor([...this.value],this.arrayType);}
    get byteLength(){
        let a = 0;
        for (const obj of this.value) a += obj.byteLength;
        return a + 4 + 1;
    }
    toSNBT(space = "", count = 1){
        if(this.length === 0) return "[]";
        if(space) {
            let a = "[";
            let add = false;
            for (const v of this.value) {
                if(add) a+=",";
                a+="\n" + space.repeat(count) + v.toSNBT(space,count+1);
                add = true;
            }
            return a + "\n" + space.repeat(count - 1) + "]";
        }
        else return "[" + this.value.map(a=>a.toSNBT(space+space)).join(",") + "]";
    }
    *[Symbol.iterator](){yield * this.value;}
}
class NumericValue extends NBTValue{
    constructor(type, value){
        super(type,value);
    }
    valueOf(){return Number(this.value);}
    get numberType(){return NBT_Number_Types[this.type];}
    get byteLength(){return NBT_Number_Size[this.type];}
    toSNBT(){return "" + this.value + this.numberType;}
}
class Uint8ArrayValue extends NBTValue{
    constructor(buffer){
        if(buffer instanceof Uint32Array.__proto__) buffer = buffer.buffer;
        if(!(buffer instanceof ArrayBuffer)) throw new TypeError("must be TypedArray or ArrayBuffer");
        super(NBT_Types.ByteArray,buffer);
    }
    set(buffer){
        if(buffer instanceof Uint32Array.__proto__) buffer = buffer.buffer;
        if(!(buffer instanceof ArrayBuffer)) throw new TypeError("must be TypedArray or ArrayBuffer");
        this.value = buffer;
    }
    get(){return this.value;}
    clone(){return new this.constructor(this.value.slice(0));}
    get byteLength(){return this.value.byteLength + 4;}
    toSNBT(){return "'" + [...new Uint8Array(this.value)].map((v)=>{let a = v.toString(16);return a.length>1?a:"0" + a}).join(" ") + "'";}
}
class StringValue extends NBTValue{ 
    constructor(v){super(NBT_Types.String,v)}; 
    valueOf(){return this.value;}; 
    setValue(v){this.value = "" + v}; 
    getValue(){return this.value;}; 
    get length(){return this.value.length}
    get byteLength(){return Buffer.from(this.value,"utf8").byteLength + 2;}
    toSNBT(){return JSON.stringify(this.value)}
}
class ByteValue extends NumericValue{ constructor(v){super(NBT_Types.Byte,v)}; }
class Int16Value extends NumericValue{ constructor(v){super(NBT_Types.Int16,v)}; }
class Int32Value extends NumericValue{ constructor(v){super(NBT_Types.Int32,v)}; }
class Int64Value extends NumericValue{ constructor(v){super(NBT_Types.Int64,v)}; }
class FloatValue extends NumericValue{ constructor(v){super(NBT_Types.Float,v)}; }
class DoubleValue extends NumericValue{ constructor(v){super(NBT_Types.Double,v)}; }
function ArrayRemove(array,index,removeNumber = 1){return array.slice(0,index).concat(array.slice(index + removeNumber));}
class NBTFile{

    /**@private */
    value;
    /**@private */
    header;

    constructor(value,name = "",hasHeader = 0){
        this.value = value;
        this.name = name;
        this.header = hasHeader;
    }
    setHeader(version = 0){
        this.header = version;
    }
    get type(){return this.value.type;}
    /**@readonly */
    get hasHeader(){return this.header>0;}
    /**@readonly */
    get headerVersion(){return this.header;}
    /**@readonly */
    get byteLength(){return (this.header?8:0) + 3 + Buffer.from(this.name,"utf8").byteLength + this.value.byteLength;}
    toSNBT(space = ""){return this.value.toSNBT(space)}
    toString(){return this.toSNBT()}
    /**@returns {NBTFile} @param {Buffer} buffer*/
    static Read(buffer){
        const headerVersion = NBTFile.GetHeaderVersion(buffer);
        const stream = new Stream(buffer,headerVersion?8:0);
        const type = stream.readByte();
        const fileName = Raw_NBT_Readers[NBT_Types.String](stream);
        return new NBTFile(NBT_Readers[type](stream),fileName,headerVersion);
    }
    /**@returns {any} @param {Buffer} buffer*/
    static ReadRaw(buffer){
        const headerVersion = NBTFile.GetHeaderVersion(buffer);
        const stream = new Stream(buffer,headerVersion?8:0);
        const type = stream.readByte();
        const skip = stream.readInt16LE();
        stream.offset += skip;
        return Raw_NBT_Readers[type](stream);
    }
    /**@returns {Buffer} @param {NBTFile} file @param {Buffer |undefined} buffer */
    static Write(file,buffer){
        const byteSize = file.byteLength; 
        buffer = buffer??Buffer.alloc(byteSize);
        if(buffer.byteLength < byteSize) throw new RangeError("Buffer size is not low, can't not save this NBTFile");
        if(file.hasHeader){
            buffer.writeInt16LE(file.headerVersion,0);
            buffer.writeInt16LE(byteSize - 8,4);
        }
        const stream = new Stream(buffer,file.hasHeader?8:0);
        stream.writeByte(file.value.type);
        NBT_Writers[NBT_Types.String](stream,{value:file.name??""});
        NBT_Writers[file.value.type](stream,file.value);
        return buffer;
    }
    /**@returns {boolean} @param {Buffer} buffer*/
    static HasHeader(buffer){return buffer.readInt32LE(4) + 8 === buffer.byteLength;}
    /**@returns {number} @param {Buffer} buffer*/
    static GetHeaderVersion(buffer){return NBTFile.HasHeader(buffer)?buffer.readInt32LE(4):0;}
}
module.exports = {
    NBTFile,
    CompoudValue,
    TypedArrayValue,
    NumericValue,
    Uint8ArrayValue,
    StringValue,
    ByteValue,
    Int16Value,
    Int32Value,
    Int64Value,
    FloatValue,
    DoubleValue,
    NBT_Types
}