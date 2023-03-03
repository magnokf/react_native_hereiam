import React, {useState} from 'react'
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'

import { styles } from './styles'

export default function Home() {
	
	const[participants, setParticipants] = useState<string[]>([])
	
	const [participantName, setParticipantName] = useState('')
	
	
	
	function handleParticipantAdd() {
		if (participants.includes(participantName)) {
			return Alert.alert('Militar já adicionado', `O militar ${participantName} já foi adicionado`)
		}
		setParticipants(participants =>[...participants, participantName])
		setParticipantName('')
		
	}
	
	function handleParticipantRemove(name: string) {
		Alert.alert('Remover participante', `Tem certeza que deseja remover ${name}?`, [
			{
				text: 'Não',
				style: 'cancel'
			},
			{
				text: 'Sim',
				onPress: () => console.log(`removeu ${name}`)
				
			}
		])
		console.log(`remove participant ${name}`)
	}
	
	return (
		
		<View style={styles.container}>
			
			<Text style={styles.eventName}>
				Escala de Serviço
			</Text>
			
			
			<Text style={styles.eventDate}>
				Sexta-feira, 03 de Março de 2023
			</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder={'Nome do militar'}
					placeholderTextColor={'#6B6B6B'}
					onChangeText={text => setParticipantName(text)}
					value={participantName}
				
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
			
			<FlatList
				data={[ ...participants ]}
				keyExtractor={item => item}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.emptyListText}>
						Nenhum participante adicionado
					</Text>
				)}
				renderItem={({ item }) => {
					return (
						<Participant
							key={item}
							name={item}
							onRemove={() => handleParticipantRemove(item)}
						/>
					)
					
				}}
			/>
		
		
		</View>
	)
}