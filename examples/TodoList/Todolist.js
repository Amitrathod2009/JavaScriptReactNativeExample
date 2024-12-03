import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Todostyles from './Todostyles'
import React, { useEffect, useState } from 'react'

const Todolist = () => {
  const [text, setText] = useState('');
  const [todoData, setTododata] = useState([]);
  const [hide, setHide] = useState(true);
  const [currentEdit, setCurrentedit] = useState(null);

  useEffect(() => {
    console.log('todoData ===>', todoData)
    console.log("tempvar answer===>", currentEdit)
  }, [todoData], [currentEdit])

  if (todoData.length < 0) {
    console.log("enter data of items====>", todoData)
  }
  const additemsfun = (index) => {
    let tempvar = [...todoData]
    const ob = {
      id: tempvar.length,
      title: text
    }
  //   if (currentEdit) {
  //     tempvar[currentEdit].title = text
  //     console.log("temp  Final===>", tempvar, index);
  //     console.log("temp index Final===>");
  //     console.log("temp chgange===>", tempvar);
  //     console.log("how to check SetText===>", setText);
  //     setTododata(tempvar)
  //     setCurrentedit('')
  //   } else {
  //     console.log("data is:==>", tempvar)
  //       tempvar.push(ob);
  //       setTododata(tempvar)
  //       setHide(false)
  //   }
  //   setText('')
  // }
    if (currentEdit) {
      tempvar[currentEdit].title = text
      console.log("temp  Final===>", tempvar, index);
      console.log("temp index Final===>");
      console.log("temp chgange===>", tempvar);
      console.log("how to check SetText===>", setText);
      setTododata(tempvar)
      setCurrentedit(null)
    } else {
      console.log("data is:==>", tempvar)
      if (text.trim().length !== 0) {
        tempvar.push(ob);
        setTododata(tempvar)
        setHide(false)
      } else {
        alert("enter Todo Item Your Input is Empty")
      }
    }
    setText('')
  }
  const removeItems = (index) => {
    console.log('[INDEX] ===>', index)
    const newDeleteData = [...todoData];
    newDeleteData.splice(index, 1);
    setTododata(newDeleteData);

  }
  const editItems = (index) => {
    let editdata = todoData[index];
    setText(editdata.title)
    setCurrentedit(index)
    console.log('[EDIT INDEX] ===>', editdata);
    console.log('[SET TEXT] ===>', editdata.title);
    console.log('[SET EDITDATA] ===>', editdata);

  }

  return (
    <View style={[Todostyles.mainContainer]}>
      <View style={[Todostyles.todoContainer]}>
        <TextInput
          placeholder="enter todo items"
          value={text}
          onChangeText={(text) => setText(text)}
          keyboardType="todo"
          style={Todostyles.input}
        />
        <TouchableOpacity
          style={[Todostyles.buttonAdd]}
          onPress={
            () => additemsfun()
          }
        >
          <Text style={[Todostyles.commnonText]}>ADD</Text>
        </TouchableOpacity>
      </View>

      {
        hide ? <Text>no data</Text> : <View style={[Todostyles.todoItemContainer]}>
          {todoData.map((item, index) => {
            return (
              <View style={[Todostyles.todoItemSubcontainer]}
              >
                <View style={{ flex: 1 }}>

                  <Text style={{ color: 'black' }} >{item.title}</Text>
                </View>
                <TouchableOpacity
                  style={[Todostyles.buttonEdit]}
                  onPress={
                    () => editItems(index)
                  }
                >
                  <Text style={[Todostyles.commnonText]} >Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Todostyles.buttonDel]}
                  onPress={
                    () => removeItems(index)
                  }
                >
                  <Text style={[Todostyles.commnonText]}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

      }


    </View>
  )
}

export default Todolist