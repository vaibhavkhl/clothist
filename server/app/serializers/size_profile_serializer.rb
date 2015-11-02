class SizeProfileSerializer < ActiveModel::Serializer
  attributes :id, :tshirt_size, :tshirt_brand, :shirt_size, :shirt_brand, :shirt_fit, :trouser_size, :trouser_brand, :trouser_fit, :height, :weight, :skin_color
  #has_one :user
end
