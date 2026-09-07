'''
Elegibilidade para votar e dirigir

'''

idade = int(input('Idade: '))

if idade < 16:
    voto = 'Não'
    voto_obrigatorio = 'Não'
    cnh = 'Não'

elif idade >= 16 and idade < 18:
    voto = 'Sim'
    voto_obrigatorio = 'Não'
    cnh = 'Não'

elif idade >= 18 and idade < 70:
    voto = 'Sim'
    voto_obrigatorio = 'Sim'
    cnh = 'Sim'

else:
    voto = 'Sim'
    voto_obrigatorio = 'Não'
    cnh = 'Sim'    

print(
    f'Pode votar: {voto}\nVoto obrigatório: {voto_obrigatorio}\nPode tirar CNH: {cnh}'
)