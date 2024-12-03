import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Pinum from './Pinum';
import Multimap from './Multimap';
const Poppushexample = () => {

  const [names, setNames] = useState(["amit", "kartik", "hitendra"]);

   const persons=[
                      {firstname:"amit",lastname:"rathod"},
                      {firstname:"abhay",lastname:"shah"},
                      {firstname:"bhupendra",lastname:"baria"},
                 ];
    const [perName,setPerName]=useState(persons); 
  const handlePush = () => {
    console.log("'Push function")
    let fetchnames = [...names];
    fetchnames.push("rathod");
    setNames(fetchnames)
    console.log("fetch names====>", fetchnames);

  };
  const handlePop = () => {
    let fetchnames = [...names];
    fetchnames.pop();
    setNames(fetchnames)
    console.log("fetch names====>", fetchnames);
  };
  const handleJoin = () => {
    let fetchnames = [...names];
    console.log("fetch names join===>", fetchnames);
    let jn = fetchnames.join("*");
    setNames(jn)

    console.log("Join * names====>", jn);
    // names.join("*")
    // console.log("join===>",names)
  }
  // const handleMap = () => {
  //   let mapdatas = [...myno].map(Math.sqrt);
  //   console.log("map data==>", mapdatas)
  // }  

 
  const perFun = () => {
    console.log(perName,"[perName]")
     const newperdata=perName.map((names)=>{
      console.log('[names]',names);
      return names.firstname+"dddddddddd"
      
     })
     console.log(newperdata)
     setPerName(newperdata)
     
  }

  return (
    <View style={{ backgroundColor: "skyblue", flex: 1 }}>
      <View style={{ backgroundColor: "white", flex: 1, borderColor: "red", borderWidth: 5, marginVertical: 20, marginHorizontal: 20 }}>
        <Text style={{ textAlign: "center", color: "black", marginRight: 2 }}>{names}</Text>

        {/* {names.map((element, index) => {
        return (
          <View key={index}>
            <Text>{element}</Text>
          </View>
        );
      })} */}
       
       {
        persons && persons.map((names,index)=>{
          return(
            <View key={index}>
              <Text style={{ color: "black", fontSize: 25, textAlign: "center", paddingHorizontal: 20, }}>{names.firstname+"hello"}</Text>
            </View>
          )
        })
      }
        <View style={{ flexDirection: "row", justifyContent: "center", margin: 5 }}>
          <TouchableOpacity style={{ backgroundColor: "grey", margin: 10 }} onPress={()=>handlePush()}><Text style={{ color: "white", fontSize: 25, textAlign: "center", paddingHorizontal: 20, }}>push</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "blue", margin: 10 }} onPress={handlePop}><Text style={{ color: "white", fontSize: 25, textAlign: "center", paddingHorizontal: 30 }}>Pop</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "blue", margin: 10 }} onPress={handleJoin}><Text style={{ color: "red", fontSize: 25, textAlign: "center", paddingHorizontal: 30 }}>Join</Text></TouchableOpacity>
        </View>
      
        <View>
          <TouchableOpacity style={{ backgroundColor: "black", margin: 10 }} onPress={perFun}>
            <Text style={{ color: "white", fontSize: 25, textAlign: "center", paddingHorizontal: 20, }}>object</Text>
          </TouchableOpacity>
          <Multimap/>
            <Pinum/>
        </View>
      </View>
    
    </View>
  )
}

export default Poppushexample