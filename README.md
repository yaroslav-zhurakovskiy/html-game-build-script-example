# Script installation

```
git clone https://github.com/yaroslav-zhurakovskiy/html-game-builder-script
cd html-game-builder-script 
make
```
Run the following command to check if the script is installed
```
sandbox-build -h
```

# Project structure
game-src - The source code of the html 5 game

AppIcon.appiconset - The iconset to use for the iOS game.

template - The template Xcode project to use. Dont modify it!!

Game.yml - A specification file that describes the iOS project

# Game.yml file
## Required fields
```yml
xcodeProjectDir: "XcodeProjectBuild"
templatePath: "template"
gameSrc: "game-src"
name: "Cave flower" # The name that will be displayed on Home Screen
bundleId: "com.yaroslav-zhurakovskiy.cave-flower" # The id of your game
version: "1.0.0" # The verison of your game
buildNumber: 1 # The build number of your game
appiconsetSrc: "AppIcon.appiconset" # A path to the application icon set
```
## Optional fields
```yml
sdk: "8.0" # Minimum iOS SDK to support. 8.0 is the minimum version.
developmentTeam: "FSX848FP3F" # The id of your apple development team.
fastlane: 
    # appleID & teamID are quired if you want to build using the script
    appleID: "yaroslav.zhurakovskiy@gmail.com"
    teamID: "FSX848FP3F" # The same as 'developmentTeam' key
    
    # itcTeamID is required if you want to upload to testflight using the script
    itcTeamID: "98037968"
```
## Optional ad platorm plugins
```yml
GADApplicationIdentifier: "ca-app-pub-5014586027013097~8955954505" # Google admob app id

# Both fields are quired if you want to use mintegral ads plugin
MintegralApiKey: "fb1eba8f974622524f29bc12bc8cb6e5"
MintegralAppID: "123727" # It is optionnal

BytedanceAppID: "5047875" # It is optionnal
```

If you dont include a specific key associated with a plugin this plugin will not be installed. For instance, if you dont include "GADApplicationIdentifier" Google Admob plugin will not be included in the build.

# Using the example
## Downloading
```
  git clone https://github.com/yaroslav-zhurakovskiy/html-game-build-script-example
  cd html-game-build-script-example
```

## Generating an Xcode project
```
sandbox-build -g
open XcodeProjectBuild/Game.xcworkspace
```
Now you can run the game on iOS simulator or you can Archive it and send to Test Flight from Xcode.

## Building an iPA file
```
sandbox-build -b
```
The result iPA file will be located in XcodeProjectBuild folder.
## Uploading to iTunes Connect
```
sandbox-build -u
```

# Troubleshooting Apple cerrificates
You will need to have Apple Developer Certificate and Apple Distribution Certificate for Xcode 11. The easiest way to create them is to use Xcode 11. Just generate an xcode project and archive the game. Xcode will generate all the neccesary certificates and add them to your keychain.
