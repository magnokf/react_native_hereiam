import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Home() {
	
	function handleParticipantAdd(){
		console.log('add particpant button')
	}
	
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>
				Nome do Evento
			</Text>
			
			
			<Text style={styles.eventDate}>
				Sexta, 12 de Março de 2021
			</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder={'Nome do participante'}
					placeholderTextColor={'#6B6B6B'}
				
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleParticipantAdd}
				>
					<Text style={styles.buttonText}>
						+
					</Text>
				</TouchableOpacity>
			</View>
			
		
		</View>
	)
}