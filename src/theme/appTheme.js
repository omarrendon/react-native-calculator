import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 60,
    textAlign:'right',
    marginBottom: 10,
  },
  beforeText: {
    color: '#9B9B9B',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'right'
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  textButton: {
    textAlign: "center",
    padding: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});