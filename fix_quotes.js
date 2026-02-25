const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('src/app/blog', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix weird '$ issue
        let newContent = content.replace(/'\$/g, "'");
        
        // Specifically fix line 237 of how-to-eat-sushi-guide
        if (filePath.includes('how-to-eat-sushi-guide')) {
            newContent = newContent.replace(
                "fact='The word \"sushi\" doesn't mean raw fish — it refers to the seasoned vinegared rice. \"Su\" means vinegar and \"shi\" comes from \"meshi\" (rice). You can have sushi without any raw fish at all.'",
                "fact={`The word \"sushi\" doesn't mean raw fish — it refers to the seasoned vinegared rice. \"Su\" means vinegar and \"shi\" comes from \"meshi\" (rice). You can have sushi without any raw fish at all.`}"
            );
        }
        
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Fixed quotes in ${filePath}`);
        }
    }
});
