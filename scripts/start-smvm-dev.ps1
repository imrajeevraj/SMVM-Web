$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$packagePath = Join-Path $projectRoot 'package.json'

if (-not (Test-Path -LiteralPath $packagePath)) {
  throw "SMVM Web package.json was not found at $projectRoot"
}

$package = Get-Content -Raw -LiteralPath $packagePath | ConvertFrom-Json
if ($package.name -ne 'smvm-web') {
  throw "Refusing to start a different project from $projectRoot"
}

Set-Location -LiteralPath $projectRoot
Write-Host "Starting SMVM Web from $projectRoot on http://127.0.0.1:5173"

& npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort
exit $LASTEXITCODE
