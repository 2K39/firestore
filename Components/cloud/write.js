import { firebase } from '@firebase/app';
import '@firebase/firestore'
import { Container , Button , Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WriteToCloudFireStore  (){
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('test')
                .doc('test') // leave as .doc() for a random unique doc name to be assigned
                .set({
                    string_data: 'Benjamin Carlson',
                    number_data: 2,
                    boolean_data: true,
                    map_data: { stringInMap: 'Hi', numberInMap: 7 },
                  
                })
                .then(alert('Data was successfully sent to cloud firestore!'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <>
            <Button onClick={sendData}>send data to cloud</Button>
        </>
    )
}