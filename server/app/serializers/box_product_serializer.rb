class BoxProductSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :accepted
  has_one :product
end
