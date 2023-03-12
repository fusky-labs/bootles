class Debugger:
    @staticmethod
    def info(text: str):
        print(f"[INFO] {text}")

    @staticmethod
    def error(text: str):
        print(f"[ERROR!] {text}")

    @staticmethod
    def warn(text: str):
        print(f"[WARN] {text}")


def main():
    Debugger.info("Heyo guys, my name is BetaEtaDelota! [and other crap here]")


if __name__ == "__main__":
    main()
