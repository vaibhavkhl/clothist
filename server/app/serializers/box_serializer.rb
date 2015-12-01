class BoxSerializer < ActiveModel::Serializer
  attributes :id
  has_many :box_products
end
