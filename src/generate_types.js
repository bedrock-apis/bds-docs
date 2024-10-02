import { factory, SyntaxKind } from "typescript";

/**
 * @param {string} alias
 * @param {string} moduleName 
 */
export function CreateImportModuleDependency(alias, moduleName){
    return factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamespaceImport(factory.createIdentifier(alias))
        ),
        factory.createStringLiteral(moduleName),
        undefined
      );
}
/**
 * 
 * @param {SyntaxKind.PublicKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PrivateKeyword} kind 
 * @param  {...import("typescript").ParameterDeclaration} parameters 
 */
export function CreateConsrcutor(kind, ...parameters){
    return factory.createConstructorDeclaration(
        [factory.createToken(kind)],
        [],
        undefined
    );
}
factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);

factory.createFunctionDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    undefined,
    factory.createIdentifier("Method"),
    undefined,
    [factory.createParameterDeclaration(
      undefined,
      undefined,
      factory.createIdentifier("method"),
      undefined,
      factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      undefined
    )],
    factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
    undefined
  )
  factory.createInterfaceDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier("Interface"),
    undefined,
    undefined,
    [
      factory.createMethodSignature(
        undefined,
        factory.createIdentifier("sendMessage"),
        undefined,
        undefined,
        [],
        factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
      ),
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("bob"),
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      )
    ]
  )factory.createClassDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier("Player"),
    undefined,
    undefined,
    [
      factory.createConstructorDeclaration(
        [factory.createToken(ts.SyntaxKind.PublicKeyword)],
        [factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier("method"),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          undefined
        )],
        undefined
      ),
      factory.createMethodDeclaration(
        [factory.createToken(ts.SyntaxKind.PublicKeyword)],
        undefined,
        factory.createIdentifier("sendMessage"),
        undefined,
        undefined,
        [factory.createParameterDeclaration(
          undefined,
          undefined,
          factory.createIdentifier("method"),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          undefined
        )],
        factory.createTypeReferenceNode(
          factory.createQualifiedName(
            factory.createIdentifier("_ss"),
            factory.createIdentifier("Test")
          ),
          undefined
        ),
        undefined
      ),
      factory.createPropertyDeclaration(
        [
          factory.createToken(ts.SyntaxKind.PublicKeyword),
          factory.createToken(ts.SyntaxKind.ReadonlyKeyword)
        ],
        factory.createIdentifier("nameTag"),
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        undefined
      )
    ]
  )
  factory.createMethodSignature(
    undefined,
    factory.createIdentifier("sendMessage"),
    undefined,
    undefined,
    [],
    factory.createTypeReferenceNode(
      factory.createIdentifier("Generator"),
      [
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
        factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
      ]
    )
  )
  factory.createMethodSignature(
    undefined,
    factory.createIdentifier("sendMessage"),
    undefined,
    undefined,
    [],
    factory.createTypeReferenceNode(
      factory.createIdentifier("Promise"),
      [factory.createUnionTypeNode([
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
        factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
      ])]
    )
  )
  factory.createMethodSignature(
    undefined,
    factory.createIdentifier("sendMessage"),
    undefined,
    undefined,
    [],
    factory.createArrayTypeNode(factory.createParenthesizedType(factory.createUnionTypeNode([
      factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
      factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
    ])))
  )
  factory.createMethodSignature(
    undefined,
    factory.createIdentifier("sendMessage"),
    undefined,
    undefined,
    [],
    factory.createParenthesizedType(factory.createFunctionTypeNode(
      undefined,
      [factory.createParameterDeclaration(
        undefined,
        undefined,
        factory.createIdentifier("m"),
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        undefined
      )],
      factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)
    ))
  )
  factory.createMethodSignature(
    undefined,
    factory.createIdentifier("sendMessage"),
    undefined,
    [
      factory.createTypeParameterDeclaration(
        undefined,
        factory.createIdentifier("T"),
        factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
        factory.createLiteralTypeNode(factory.createNumericLiteral("5"))
      ),
      factory.createTypeParameterDeclaration(
        undefined,
        factory.createIdentifier("S"),
        undefined,
        undefined
      )
    ],
    [],
    factory.createParenthesizedType(factory.createFunctionTypeNode(
      undefined,
      [factory.createParameterDeclaration(
        undefined,
        undefined,
        factory.createIdentifier("m"),
        undefined,
        factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        undefined
      )],
      factory.createTypeReferenceNode(
        factory.createIdentifier("T"),
        undefined
      )
    ))
  )
  factory.createEnumDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier("MethodLike"),
    [factory.createEnumMember(
      factory.createIdentifier("test"),
      factory.createNumericLiteral("5")
    )]
  )
  factory.createEnumDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier("MethodLike"),
    [factory.createEnumMember(
      factory.createIdentifier("test"),
      undefined
    )]
  )
factory.createVariableStatement(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createIdentifier("world"),
        undefined,
        factory.createTypeReferenceNode(
          factory.createIdentifier("World"),
          undefined
        ),
        undefined
      )],
      ts.NodeFlags.Const | ts.NodeFlags.Constant | ts.NodeFlags.Constant
    )
  )
factory.createVariableStatement(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createIdentifier("TickPerSecond"),
        undefined,
        undefined,
        factory.createNumericLiteral("20")
      )],
      ts.NodeFlags.Const | ts.NodeFlags.Constant | ts.NodeFlags.Constant
    )
  )