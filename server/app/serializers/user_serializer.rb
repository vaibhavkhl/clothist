class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
  # has_many :workpreference
  # has_many :costpreference
  #has_one :size_profile
end
