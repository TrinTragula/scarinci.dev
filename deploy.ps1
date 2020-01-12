Remove-Item -LiteralPath build -Force -Recurse
npm run build
Remove-Item -LiteralPath docs -Force -Recurse
Copy-Item 'build' -Destination 'docs' -Recurse -Force
Remove-Item -LiteralPath build -Force -Recurse