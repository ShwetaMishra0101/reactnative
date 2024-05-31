import { Text, View } from "react-native"
import Appstyles from './Comp.scss';
const Comp =()=>{
    return(
        <View style={Appstyles.container}>
        <Text style={Appstyles.text}>Open up to start working on your app!</Text>
      </View>
    )
}
export default Comp