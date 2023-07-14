// import Grid from 'gridfs-stream'
// import {GridFsStorage} from 'multer-gridfs-storage'
// import mongoose  from 'mongoose'

// // Set up GridFS
// Grid.mongo = mongoose.mongo;


// const  url= 'mongodb+srv://Amal:amal123@cluster0.ma0llxm.mongodb.net/bigsurmoon_data?retryWrites=true&w=majority'
// // Create GridFS storage engine
// const storage = GridFsStorage({
//   url,
//   file: (req, file) => {
//     console.log('req in grid', req.body);
//     return {
//       filename: 'FILE',
//       metadata: { contentType: file.mimetype },
//     };
//   },
// });
// // Create a storage object with a given configuration
// // const storage = new GridFsStorage({ url,
// //  });
// console.log(storage);


// export default storage;
