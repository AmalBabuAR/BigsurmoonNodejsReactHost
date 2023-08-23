import ThreejsData from "../models/paymentModel.js";

export const threejsDataController = async (req, res) => {
  console.log("data in req.body", typeof(req.body), req.body.camera);
  const objectData = req.body.scene; 

  console.log(objectData);

  const threeData = new ThreejsData(objectData);
   // Save the document
   threeData.save()
   .then((document) => {
     console.log('Data added to the database:', document);
     res.status(200).send('Data added to the database');
   })
   .catch((error) => {
     console.error('Failed to add data to the database:', error);
     res.status(500).send('Failed to add data to the database');
   });
};


export const threejsDataSaveController = async ( req, res) =>  {
  console.log(req.body,'req when the tab is closed');

}