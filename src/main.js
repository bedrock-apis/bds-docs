const {Download, DownloadContent}= require("./download.js");
const bds_versions_link = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
const github_notfound = "404: Not Found";

async function Run(){
    const response = await DownloadContent("https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json");
    const data = response.toString();
    console.log(data,github_notfound,data === github_notfound);
};
Run();
async function CompareLatestVersions(){}
/*
console.log("Downloading . . .");
Download("./bin/","1.20.40.20","linux",true)
.then(()=>{
    console.log("done...")
})
.catch(er=>{
    console.error(er);
    process.exit(1);
});*/