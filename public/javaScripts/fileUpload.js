
// FilePond.registerPlugin(
//     FilePondPluginImagePreview,
//     FilePondPluginImageResize,
//     FilePondPluginFileEncode,
// );
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginImageResize);
FilePond.registerPlugin(FilePondPluginFileEncode);

FilePond.setOptions({
    stylePanelAspectRatio: 150/100,
    imageResizeTargetWidth: 100,
    imageResizeTargetWidth: 150,

})

FilePond.parse(document.body);


