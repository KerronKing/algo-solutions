def create_target_array(nums, index)
  result = Array.new

  for i in 0...nums.length do
    result.insert(index[i], nums[i])
  end

  result
end

print create_target_array([0, 1, 2, 3, 4], [0,1,2,2,1])