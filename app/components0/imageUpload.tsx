import React, { useState, ChangeEvent } from 'react';
import { uploadImage } from '../utils/images';
import Image from 'next/image';
import { FiTrash } from 'react-icons/fi'; 
import { useRouter } from 'next/navigation';

interface ImageUploadProps {
  onUploadComplete: () => void; 
}

const ImageUpload: React.FC<ImageUploadProps> = ({  onUploadComplete }) => {

  const router = useRouter();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files) {
      setSelectedFiles([...selectedFiles, ...Array.from(files)]);
    }
  };

  const handleUpload = async () => {
    try {

  
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('images', file);
      });
  
      const response = await uploadImage(formData);
      if (!response.success) {
        alert('Failed to upload images.');
        return;
      }
  
      alert('All images uploaded successfully.');
      setSelectedFiles([]);
      onUploadComplete();
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <div className='flex flex-col'>
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          name="images"
          id="file-input"
          className="hidden"
        />

        <label htmlFor="file-input" className="cursor-pointer mx-10 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <h1 className='flex justify-center'>Choose Photos</h1>
        </label>

        <div className="flex overflow-x-auto mt-5">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative flex-shrink-0">  
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                width={500}
                height={500}
                className='border border-black rounded-lg m-3 h-80 w-96'
              />

              <button
                onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}
                className="absolute top-2 right-2 m-3 p-2 bg-red-600 text-white rounded-full"
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-60 h-10 text-slate-50 bg-blue-950
             hover:bg-blue-800 rounded-full max-sm:w-40 text-lg"
            onClick={handleUpload}
          >
            Upload Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;


