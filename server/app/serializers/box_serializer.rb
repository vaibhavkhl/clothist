class BoxSerializer < ActiveModel::Serializer
  attributes :id, :unique_identifier, :return_datetime
  has_many :box_products
end
