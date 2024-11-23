from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy-policy.html')

@app.route('/terms-of-service')
def terms():
    return render_template('terms-of-service.html')

@app.route('/app-ads.txt')
def serve_text_file():
    return send_from_directory('static', 'app-ads.txt')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
