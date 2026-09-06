'''
Conversor de Temperatura

'''

temp_em_c = float(input('Digite uma temperatura (C°): '))

def conversaoTempC_F():
    temp_em_f = (temp_em_c * 9/5) + 32
    print(f'{temp_em_c}°C equivale a {temp_em_f}°F.')

def analisarTempC():
    if temp_em_c <= 0:
        print(f'Classificação: Congelando')

    elif temp_em_c >= 1 and temp_em_c <= 15:
        print(f'Classificação: Frio')

    elif  temp_em_c >= 16 and temp_em_c <= 25:
        print(f'Classificação: Agradável')

    else:
        print(f'Classificação: Quente')

conversaoTempC_F()
analisarTempC()