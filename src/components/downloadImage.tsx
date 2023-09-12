import FileSaver from 'file-saver';

export async function downloadImage(_id: string, photo: string): Promise<void> {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
