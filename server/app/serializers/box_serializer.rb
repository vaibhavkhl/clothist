class BoxSerializer < ActiveModel::Serializer
  attributes :id, :unique_identifier, :return_datetime, :payment_method
  has_many :box_products
end
