if ! command -v md-to-pdf &> /dev/null
then
    npm i -g md-to-pdf
fi
md-to-pdf README.md --document-title "Basic résumé of David Hardy" --pdf-options '{ "Author": "David Hardy", "format": "a4", "margin": { "top": "30mm", "right": "40mm", "bottom": "30mm", "left": "20mm" } }'  --config-file resume.json
md-to-pdf ABOUT.md --document-title "David Hardy - Cover Letter" --pdf-options '{ "Author": "David Hardy", "format": "a4", "margin": { "top": "30mm", "right": "40mm", "bottom": "30mm", "left": "20mm" } }'  --config-file coverLetter.json
