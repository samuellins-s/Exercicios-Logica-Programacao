'''
Calculadora de Troco

'''

valor_compra = float(input('Valor da compra: '))
valor_pago = float(input('Valor pago: '))
troco = valor_pago - valor_compra

if valor_pago > valor_compra:
    print(f'Troco: R$ {troco:.2f}')

elif valor_pago == valor_compra:
    print('Tudo ok. Sem troco')
else:

    troco = troco * -1
    print(f'Valor pago insuficiente. Faltam R$ {troco:.2f}')
