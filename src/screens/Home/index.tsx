import React, {useState} from 'react'
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'

import { styles } from './styles'

export default function Home() {
	
	const[participants, setParticipants] = useState<string[]>([])
	
	const [participantName, setParticipantName] = useState('')
	
	
	
	function handleParticipantAdd() {
		if (participantName.trim() === '') {
			setParticipantName('')
			return Alert.alert('Nome do militar vazio', 'Digite o nome do militar')
		}


		const participantNameTrimed = participantName.trim().toLowerCase()
		const index = participants.findIndex(participant => participant.trim().toLowerCase() === participantNameTrimed)
		if (index >= 0) {
			return Alert.alert('Militar já adicionado', `O militar ${participantName} já foi adicionado`)
		}
		setParticipants(participants =>[...participants, participantName.toUpperCase()])
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
				onPress: () => setParticipants(participants => participants.filter(participant => participant !== name))
				
			}
		])

	}


	
	return (
		
		<View style={styles.container}>
			
			<Text style={styles.eventName}>
				Escala de Expediente Presencial
			</Text>
			
			
			<Text style={styles.eventDate}>
				Sexta-feira, 03 de Março de 2023
			</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder={'Nome do militar'}
					placeholderTextColor={'#6B6B6B'}
					onChangeText={setParticipantName}
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
						Nenhum militar foi adicionado. Adicione um militar para começar a gerar a escala de serviço do dia.
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