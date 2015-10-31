class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :workpreference
  has_many :costpreference
end
