class User < ActiveRecord::Base
  devise :database_authenticatable, :recoverable,
         :registerable

  include DeviseTokenAuth::Concerns::User

  before_save -> { skip_confirmation! }

  has_many :workpreference
  accepts_nested_attributes_for :workpreference

  has_many :leisurepreference
  accepts_nested_attributes_for :leisurepreference

  has_many :notwearpreference
  accepts_nested_attributes_for :notwearpreference

  has_many :unlikepatternspreference
  accepts_nested_attributes_for :unlikepatternspreference

  has_one :costpreference
  accepts_nested_attributes_for :costpreference
end
