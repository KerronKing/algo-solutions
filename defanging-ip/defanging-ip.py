def defangIPaddr(address):
  result = ''

  for char in address:
    if char == '.':
      result += '[.]'
    else:
      result += char
  
  print(result)

defangIPaddr('1.1.1.1')
# "1[.]1[.]1[.]1"