import {useState} from "react";
import Input from "./Input";
import FormError from "./FormError";


const AssetForm = () => {


const [asset,setAsset] = useState({
    name:"",
    category:"",
    serial:"",
});


const [errors,setErrors] = useState({});


const handleChange=(e)=>{

    setAsset({
        ...asset,
        [e.target.name]:e.target.value
    });

};



const validate =()=>{

    let newErrors={};


    if(!asset.name)
        newErrors.name="Asset name is required";


    if(!asset.category)
        newErrors.category="Category is required";


    if(!asset.serial)
        newErrors.serial="Serial number is required";


    setErrors(newErrors);


    return Object.keys(newErrors).length===0;

};



const handleSubmit=(e)=>{

    e.preventDefault();


    if(validate()){

        console.log(asset);

        alert("Asset Added Successfully");


        setAsset({
            name:"",
            category:"",
            serial:""
        });

    }

};



return (

<div className="bg-white p-6 rounded-xl shadow-md">


<h2 className="text-xl font-bold mb-4">
Add New Asset
</h2>


<FormError message=""/>


<form onSubmit={handleSubmit}>


<Input
label="Asset Name"
name="name"
value={asset.name}
onChange={handleChange}
placeholder="Enter asset name"
error={errors.name}
/>



<Input
label="Category"
name="category"
value={asset.category}
onChange={handleChange}
placeholder="Laptop, Mobile..."
error={errors.category}
/>



<Input
label="Serial Number"
name="serial"
value={asset.serial}
onChange={handleChange}
placeholder="Enter serial number"
error={errors.serial}
/>



<button
className="bg-blue-600 text-white px-5 py-2 rounded-lg"
>
Add Asset
</button>


</form>


</div>

);


};


export default AssetForm;