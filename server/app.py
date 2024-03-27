from flask import Flask, request, Response, jsonify
import argparse

parser = argparse.ArgumentParser(
    description="The server to encode a custom Beta video"
)

parser.add_argument("-P",
                    "--prod",
                    help="Runs the server in production mode",
                    action="store_true")

args = parser.parse_args()

# Here's the juicy stuff
bootles = Flask(__name__)


@bootles.after_request
def after_request(response):
    header = response.headers

    header["Access-Control-Allow-Origin"] = "*"
    header["Access-Control-Allow-Headers"] = "*"
    header["Access-Control-Allow-Methods"] = "GET,POST"
    header['X-Content-Type-Options'] = 'nosniff'
    header['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'

    return response


@bootles.route("/", methods=["GET"])
def root():
    return "Your mom gay"


@bootles.route("/process", methods=["POST"])
def process_video():
    return jsonify(request.json)


if __name__ == "__main__":
    HOST, PORT = "0.0.0.0", 6969

    if args.prod:
        bootles.run(host=HOST, port=PORT)

    bootles.run(host=HOST, port=PORT, debug=True)
