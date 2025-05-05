// info.plist extra settings
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
<key>ITSAppUsesNonExemptEncryption</key>
<false/>


// version
dotnet workload restore
dotnet workload install maui-ios --version 8.0.402.0

// .net publish
-f net9.0-ios -c Release -p:ArchiveOnBuild=true -p:RuntimeIdentifier=ios-arm64 -p:CodesignKey="Apple Distribution: SKDemo (6FYLQD5CTQ)" -p:CodesignProvision="SK Demo App" -p:EnableAssemblyILStripping=false -p:MtouchUseLlvm=false