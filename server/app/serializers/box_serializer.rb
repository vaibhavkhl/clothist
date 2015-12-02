class BoxSerializer < ActiveModel::Serializer
  attributes :id, :unique_identifier
  has_many :box_products
end
