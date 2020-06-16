def defangIPaddr(address)
  return address.gsub('.', '[.]')
end

puts defangIPaddr('1.1.1.1')
# "1[.]1[.]1[.]1"