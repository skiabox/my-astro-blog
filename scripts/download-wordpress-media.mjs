import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const files = {
    'public/images/blog/javascript-promises-all.jpeg':
        'https://devcanvas.org/wp-content/uploads/2024/01/javascript-promises-all.jpeg',
    'public/images/blog/visual-studio-code.png':
        'https://devcanvas.org/wp-content/uploads/2024/01/visual_studio_code.png',
    'public/images/projects/fancy-counter.png':
        'https://devcanvas.org/wp-content/uploads/2024/01/fancy-counter-featured-image.png',
    'public/images/projects/word-analytics.png':
        'https://devcanvas.org/wp-content/uploads/2024/01/word-analytics-featured-image.png',
    'public/images/projects/trekbag.png': 'https://devcanvas.org/wp-content/uploads/2024/02/trekbag.png',
    'public/images/projects/corporate-feedback.png':
        'https://devcanvas.org/wp-content/uploads/2024/02/corpcommentsfeaturedimage.png',
    'public/images/projects/job-finder.png': 'https://devcanvas.org/wp-content/uploads/2024/04/jobfinder.png',
    'public/images/projects/e-commerce-admin.jpg':
        'https://devcanvas.org/wp-content/uploads/2025/04/Home_Page-scaled.jpg',
    'public/images/projects/ai-resume-analyzer.png':
        'https://devcanvas.org/wp-content/uploads/2025/04/AI-Resume-Analyzer-08-13-2025_12_46_PM-scaled.png',
    'public/images/projects/stackshop.png': 'https://devcanvas.org/wp-content/uploads/2026/03/StackShop-scaled.png',
    'public/files/resume-stavros-kefaleas.pdf':
        'https://devcanvas.org/wp-content/uploads/2025/08/Resume-Stavros-Kefaleas.pdf'
};

for (const [destination, source] of Object.entries(files)) {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${source}`);

    const output = join(process.cwd(), destination);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, Buffer.from(await response.arrayBuffer()));
    console.log(`Downloaded ${destination}`);
}
