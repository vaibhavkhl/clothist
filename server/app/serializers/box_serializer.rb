class BoxSerializer < ActiveModel::Serializer
  attributes :id, :unique_identifier, :return_datetime, :payment_method,
    :products_bought_cost, :processed

  has_one :feedback
  has_many :box_products
  # belongs_to :user
end
