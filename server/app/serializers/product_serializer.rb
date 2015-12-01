class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :original_price
end
