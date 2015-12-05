class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :original_price, :brand, :sell_price,
    :feedback_required, :custom_id, :unique_id 
end
