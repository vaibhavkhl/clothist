class BoxProductSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :accepted
  has_one :product
  has_one :returned_product_reason
end
