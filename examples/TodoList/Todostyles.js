
import { StyleSheet } from 'react-native'

export default Todostyles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  todoItemContainer: {
    paddingVertical: 36
  },
  todoItemSubcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 8,
    marginTop: 5,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,

  },
  input: {
    fontSize: 20,
    height: 40,
    width: 250,
    color: "red",
    borderColor: '#7a42f4',
    borderWidth: 1,
    flex: 1, marginHorizontal: 3
  },
  buttonAdd: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  buttonDel: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: "red",
    borderRadius: 10,
  },
  buttonEdit: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: "green",
    borderRadius: 10,
  },
  commnonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600"
  }
});
