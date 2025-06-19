@echo off
setlocal

:: Caminhos
set "targetFile=\\llk85c20003fs\CGS\1ºNivel\MMI\Deskflow\deskflow.html"
set "shortcutName=Deskflow.lnk"
set "iconFile=\\llk85c20003fs\CGS\1ºNivel\MMI\Deskflow\componentes\icon\deskflow.ico"
set "desktopPath=%USERPROFILE%\Desktop"
set "vbsScript=%TEMP%\createShortcut.vbs"

:: Cria o script VBS temporário
> "%vbsScript%" (
echo Set oWS = WScript.CreateObject("WScript.Shell")
echo sLinkFile = "%desktopPath%\%shortcutName%"
echo Set oLink = oWS.CreateShortcut(sLinkFile)
echo oLink.TargetPath = "%targetFile%"
echo oLink.IconLocation = "%iconFile%"
echo oLink.WindowStyle = 1
echo oLink.Description = "Atalho para Deskflow"
echo oLink.Save
)

:: Executa o VBS
cscript //nologo "%vbsScript%"

:: Limpa o script
del "%vbsScript%"

endlocal
