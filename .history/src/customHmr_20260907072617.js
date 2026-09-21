// Source - https://stackoverflow.com/a/69628635
// Posted by flydev, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-07, License - CC BY-SA 4.0

export default function CustomHmr() {
    return {
      name: 'custom-hmr',
      enforce: 'post',
      // HMR
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.json')) {
          console.log('reloading json file...');
  
          server.ws.send({
            type: 'full-reload',          
            path: '*'
          });
        }
      },
    }
}
