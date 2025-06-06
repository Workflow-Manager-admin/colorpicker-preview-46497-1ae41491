#!/bin/bash
cd /home/kavia/workspace/code-generation/colorpicker-preview-46497-1ae41491/colorpicker_preview
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

