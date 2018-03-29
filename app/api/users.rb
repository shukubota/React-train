class Users < Grape::API
  helpers do
    params :attributes_signin do
      requires :user, type: Hash do
        requires :email, type: String
        requires :password, type: String
      end
    end
  end
  resource :users do
    desc 'POST /api/users/signin'
    post '/signin' do
      user = User.find_by(email: params[:user][:email], password: params[:user][:password])
      if user
        status 200
        present :message, 'success'
        present :user, user, with: UserEntity
      else
        status 400
      end
    end
  end
end
