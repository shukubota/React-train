class UserEntity < Grape::Entity
  expose :id
  expose :name
  expose :email
  expose :password
end
