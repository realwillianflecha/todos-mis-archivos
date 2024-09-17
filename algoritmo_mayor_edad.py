# Algoritmo Mayor Edad
EDAD_ADULTO = 18
edad_persona = int(input('Proporciona tu edad: '))
# Revisamos si es mayor de edad
if edad_persona >= EDAD_ADULTO:
    print(f'La persona de edad {edad_persona} es un adulto')
else:
    print(f'La persona de edad {edad_persona} es menor de edad')