import { useAuth } from '../contexts/AuthContext'
import './Dashboard.css'

export const Dashboard = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>ダッシュボード</h1>
          <button onClick={handleSignOut} className="signout-button">
            ログアウト
          </button>
        </header>

        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>ようこそ！</h2>
            <p>Supabase認証が正常に動作しています。</p>
          </div>

          <div className="user-info">
            <h3>ユーザー情報</h3>
            <div className="info-item">
              <label>メールアドレス:</label>
              <span>{user?.email}</span>
            </div>
            <div className="info-item">
              <label>ユーザーID:</label>
              <span>{user?.id}</span>
            </div>
            <div className="info-item">
              <label>登録日時:</label>
              <span>{user?.created_at ? new Date(user.created_at).toLocaleString('ja-JP') : '不明'}</span>
            </div>
            <div className="info-item">
              <label>最終ログイン:</label>
              <span>{user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString('ja-JP') : '不明'}</span>
            </div>
            <div className="info-item">
              <label>メール確認済み:</label>
              <span>{user?.email_confirmed_at ? 'はい' : 'いいえ'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}